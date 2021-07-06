const RO = {
    auth: {
        login: 'Logare',
        register: 'Inregistrare',
        email: 'Email',
        password: 'Parola',
        passwordConfirmation: 'Confirmarea parolei',
        loginWithFacebook: 'Logare cu Facebook',
        loginWithGoogle: 'Logare cu Google',
        dontHaveAnAccountYet: "Nu aveti un cont inca? Inregistrati-va!",
        errors: {
            pleaseEnterYourEmail: 'Introduceti va rog email-ul',
            pleaseEnterYourPassword: 'Introduceti va rog parola',
            email4char: 'Email-ul trebuie sa aiba cel putin 4 caractere',
            password6char: 'Parola trebuie sa aiba cel putin 6 caractere',
            pleaseEnterValidEmail: 'Introduceti un email valid',
            pleaseRepeatYourPassword: 'Repetati parola',
            passwordMustMatch: 'Parolele trebuie sa coincida',
        }
    },
    screenHeaders: {
        info: {
            aboutApp: 'Despre aplicatie'
        },
        profile: {
            profile: 'Profil'
        },
        home: {
            makePredict: 'Faceti o Prezicere'
        },
        browse: {
            browseScreen: 'Inspectati',
        }
    },
    home: {
        info: 'Faceti o imagine cu camera dvs sau selectați una din cele existente în biblioteca foto a device-ului. ' +
            'Vă rugăm să acordați atenție imaginii care trebuie să fie o imaginea reală a unei radiografii pulmonare, ' +
            'deoarece NN funcționează doar cu radiografii, altfel ar fi ceva de genul : gunoi la intrare -> gunoi la iesire.',
        takePhoto: 'Faceti o imagine',
        mediaLibrary: 'Libraria foto',
        send: 'Trimite',
        delete: 'Sterge',
        congrats: 'Felicitari, nu aveti simptome de pneumonie',
        youHave: 'Dvs aveti',
        ofPneumonia: 'de pneumonie'
    },
    browse: {
        filter: 'Filtru',
        yourself: 'Dvs',
        all: 'Toate',
        pneumonia: 'Pneumonia',
        normal: 'Normal',
    },
    profile: {
        profileInformation: 'Informatii despre profil',
        id: 'ID',
        facebookId: 'ID-ul Facebook',
    },
    aboutApp: {
        aboutApp: 'Despre aplicatie',
        aboutPneumonia: 'Despre pneumonie',
        info: {
            pneumonia: 'Pneumonia este o afecțiune inflamatorie a plămânilor care afectează în primul rând micile cavități cu aer ' +
                'cunoscute sub denumirea de alveole. De obicei, este provocată de o infecție cu virusuri sau cu bacterii și mai rar,' +
                ' de alte microorganisme, de anumite medicamente și de alte afecțiuni, cum ar fi bolile autoimune' +
                'Simptomele tipice includ tuse, durere în piept, febră și respirație grea Instrumentele de diagnosticare' +
                ' includ radiografia și cultura sputei. Pentru prevenirea anumitor tipuri de pneumonie sunt disponibile vaccinuri.' +
                ' Tratamentul depinde de cauza subiacentă. Pneumonia bacteriană presupusă se tratează cu antibiotice. În cazul în care ' +
                'pneumonia este gravă, persoana afectată este în general internată în spital.' +
                'Anual, pneumonia afectează aproximativ 450 de milioane de persoane, șapte procente din populația totală ' +
                'a lumii și provoacă 4 milioane de decese. Deși pneumonia era considerată de William Osler, ' +
                'în secolul al XIX-lea, drept „principala cauză de deces”, introducerea, în secolul al XX-lea,' +
                ' a terapiei cu antibiotice și a vaccinurilor a contribuit la îmbunătățirea ratei de supraviețuire.' +
                ' Cu toate acestea, în țările în curs de dezvoltare, precum și în rândul persoanelor foarte în vârstă,' +
                ' foarte tinere sau care suferă de boli cronice, pneumonia rămâne principala cauză de deces',
            app: 'Aplicatia reprezinta o solutie pentru a identifica semne de pneumonie in baza la radiografia toracica fie fata, fie spate.\n' +
                'Este o lucrare de licenta, si trebuie tratata ca atare. \n' +
                'Ca baza de antrenament au fost datele de la Kaggle, 5863 de imagini preluate de la ,,Guangzhou Women and Children’s Medical Center,\n' +
                'Guangzhou”. \n' +
                'Pentru analiza imaginilor cu raze X, toate radiografiile toracice au fost inițial verificate\n' +
                'pentru controlul calității, prin eliminarea tuturor scanărilor de calitate scăzută sau ilizibile.\n' +
                'Diagnosticele pentru imagini au fost apoi clasificate de doi medici experți, înainte de a fi aprobate\n' +
                'pentru antrenarea sistemului de inteligență artificială. Pentru a ține cont de eventualele erori de\n' +
                'clasificare, setul de evaluare a fost verificat și de un al treilea expert.\n' +
                'Reteaua Deep CNN a fost antrenate pe acestea date ajungand la acuratete de 88%. ',
            mail:'Pentru ulterioarele intrebari contactati:',
        }
    }
}

export {
    RO
}
