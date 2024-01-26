from flask import Flask
from flask_sqlalchemy import SQLAlchemy
# from flask_bcrypt import Bcrypt
from flask_migrate import Migrate
from flask_restful import Api, Resource

app = Flask(
    __name__,
    static_url_path='',
    static_folder='../client/dist',
    template_folder='../client/dist'
)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///culinary_companion.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)

# db.init_app(app)
# bcrypt = Bcrypt(app)
api=Api(app)