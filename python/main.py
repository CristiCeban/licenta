import sys
import numpy as np
import tensorflow as tf
import tensorflow_addons as tfa
from tensorflow.keras import backend as K
from tensorflow.keras.applications import DenseNet121
from tensorflow.keras.layers import Dropout, Dense, BatchNormalization, GlobalAveragePooling2D

METRICS = [
    tf.keras.metrics.TruePositives(name='tp'),
    tf.keras.metrics.FalsePositives(name='fp'),
    tf.keras.metrics.TrueNegatives(name='tn'),
    tf.keras.metrics.FalseNegatives(name='fn'),
    tf.keras.metrics.BinaryAccuracy(name='accuracy'),
    tf.keras.metrics.Precision(name='precision'),
    tf.keras.metrics.Recall(name='recall'),
    tf.keras.metrics.AUC(name='auc'),
    tf.keras.metrics.AUC(name='prc', curve='PR'),  # precision-recall curve
]


def predict_nn(path):
    def build_model_densenet(input_shape):
        model_densenet = DenseNet121(
            weights='imagenet',
            include_top=False,
            input_shape=input_shape,
            classes=1
        )

        for layer in model_densenet.layers[:-8]:
            layer.trainable = False

        for layer in model_densenet.layers[-8:]:
            layer.trainable = True

        model = tf.keras.Sequential(
            [
                tf.keras.layers.experimental.preprocessing.Rescaling(1. / 255, input_shape=input_shape),
                tf.keras.layers.experimental.preprocessing.RandomFlip('horizontal'),
                tf.keras.layers.experimental.preprocessing.RandomFlip('vertical'),
                tf.keras.layers.experimental.preprocessing.RandomRotation(factor=0.02),
                tf.keras.layers.experimental.preprocessing.RandomZoom(
                    height_factor=0.2,
                    width_factor=0.2,
                ),
                model_densenet,
                GlobalAveragePooling2D(),
                BatchNormalization(),
                Dropout(0.2),
                Dense(1024, activation='relu'),
                Dense(512, activation='relu'),
                BatchNormalization(),
                Dense(1, activation='sigmoid')
            ]
        )
        return model

    def focal_loss_custom(alpha, gamma):
        def binary_focal_loss(y_true, y_pred):
            fl = tfa.losses.SigmoidFocalCrossEntropy(alpha=alpha, gamma=gamma)
            focal_loss = fl(tf.cast(y_true, tf.float32), tf.cast(y_pred, tf.float32))
            return focal_loss

        return binary_focal_loss

    # physical_devices = tf.config.list_physical_devices('GPU')
    # tf.config.experimental.set_memory_growth(physical_devices[0], True)
    img_width, img_height = 150, 150
    if K.image_data_format() == "channels_first":
        input_shape = (3, img_width, img_height)
    else:
        input_shape = (img_width, img_height, 3)

    model = build_model_densenet(input_shape)
    model.compile(
        optimizer='adam',
        loss=focal_loss_custom(gamma=2.0, alpha=0.2),
        metrics=METRICS
    )
    model.load_weights('C:\\Users\\cristi\\PycharmProjects\\X_RAY\\models\\Dense121FocalLossAdam89perc')
    test_img = tf.keras.preprocessing.image.load_img(
        path,
        target_size=(img_width, img_height),
    )
    input_arr = tf.keras.preprocessing.image.img_to_array(test_img)
    input_arr = np.array([input_arr])
    return model.predict(input_arr)[0][0]


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    if len(sys.argv) < 3:
        raise SyntaxError("Insufficient arguments.")
    result = predict_nn(sys.argv[2])
    print(result)
