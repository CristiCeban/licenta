const EN = {
    auth: {
        login: 'Login',
        register: 'Register',
        email: 'Email',
        password: 'Password',
        passwordConfirmation: 'Password confirmation',
        loginWithFacebook: 'Login with Facebook',
        loginWithGoogle: 'Login with Google',
        dontHaveAnAccountYet: "Don't have an account yet? Register!",
        errors: {
            pleaseEnterYourEmail: 'Please enter your email',
            pleaseEnterYourPassword: 'Please enter your password',
            email4char: 'Email should have at least 4 char',
            password6char: 'Password should have at least 6 char',
            pleaseEnterValidEmail: 'Please enter a valid email',
            pleaseRepeatYourPassword: 'Please repeat your password',
            passwordMustMatch: 'Password must match',
        }
    },
    screenHeaders: {
        info: {
            aboutApp: 'About App'
        },
        profile: {
            profile: 'Profile'
        },
        home: {
            makePredict: 'Make a Prediction'
        },
        browse: {
            browseScreen: 'Browse',
        }
    },
    home: {
        info: 'Take a image with camera or select one from existing in media library. Please pay attention what image' +
            'should be the actual image of a x-ray because NN works only with x-ray, otherwise it would be garbage' +
            'input -> garbage output',
        takePhoto: 'Take a Photo',
        mediaLibrary: 'Media Library',
        send: 'Send',
        delete: 'Delete',
        congrats: 'Congratulations, you don\'t have sign of pneumonia',
        youHave: 'You have',
        ofPneumonia: 'of pneumonia'
    },
    browse: {
        filter: 'Filter',
        yourself: 'Yourself',
        all: 'all',
        pneumonia: 'Pneumonia',
        normal: 'Normal',
    },
    profile: {
        profileInformation: 'Profile Information',
        id: 'ID',
        facebookId: 'Facebook ID',
    },
    aboutApp: {
        aboutApp: 'About App',
        aboutPneumonia: 'About Pneumonia',
        info: {
            pneumonia: 'Pneumonia is an inflammatory condition of the lung primarily affecting the small air sacs known as' +
                'alveoli. Symptoms typically include some combination of productive or dry cough, chest pain,' +
                'fever and difficulty breathing. The severity of the condition is variable.' +
                'Pneumonia is usually caused by infection with viruses or bacteria, and less commonly by other' +
                'microorganisms.[a] Identifying the responsible pathogen can be difficult. Diagnosis is often based on' +
                'symptoms and physical examination. Chest X-rays, blood tests, and culture of the sputum may help' +
                'confirm the diagnosis. The disease may be classified by where it was acquired, such as community- or' +
                'hospital-acquired or healthcare-associated pneumonia.' +
                'Risk factors for pneumonia include cystic fibrosis, chronic obstructive pulmonary disease (COPD), sickle' +
                'cell disease, asthma, diabetes, heart failure, a history of smoking, a poor ability to cough (such as' +
                'following a stroke), and a weak immune system.' +
                'Vaccines to prevent certain types of pneumonia (such as those caused by Streptococcus pneumoniae' +
                'bacteria or that linked to influenza) are available. Other methods of prevention include hand' +
                'washing to prevent infection, and not smoking.' +
                'Treatment depends on the underlying cause. Pneumonia believed to be due to bacteria is treated with' +
                'antibiotics. If the pneumonia is severe, the affected person is generally hospitalized. Oxygen' +
                'therapy may be used if oxygen levels are low.' +
                'Each year, pneumonia affects about 450 million people globally (7% of the population) and results in' +
                'about 4 million deaths. With the introduction of antibiotics and vaccines in the 20th century,' +
                'survival has greatly improved. Nevertheless, pneumonia remains a leading cause of death in' +
                'developing countries, and also among the very old, the very young, and the chronically ill.' +
                'Pneumonia often shortens the period of suffering among those already close to death and has thus been' +
                'called "the old man\'s friend".',
            app:'The app is a solution to identify signs of pneumonia based on a chest X-ray either front or back.\n' +
                'It is an undergraduate work, and should be treated as such. \n' +
                'As a basis for the training were Kaggle data, 5863 images taken from ,,Guangzhou Women and Children\'s Medical Center,\n' +
                'Guangzhou". \n' +
                'For the analysis of the X-ray images, all chest radiographs were initially checked\n' +
                'for quality control by eliminating all low-quality or illegible scans.\n' +
                'The diagnostic images were then graded by two medical experts before being approved\n' +
                'for training the artificial intelligence system. To account for any errors in\n' +
                'classification, the evaluation set was also checked by a third expert.\n' +
                'The Deep CNN network was trained on this data reaching 88% accuracy.',
            mail:'For further questions contact:',
        }
    }
}

export {
    EN
}
