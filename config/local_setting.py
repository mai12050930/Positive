import os
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

SECRET_KEY = '93h$aa_(@=0vlw^itbuhgv^vb!6k$p@!#n0)-9fd5g#s1_e!ta'


DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
        }
}

DEBUG = True