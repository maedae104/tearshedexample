import json
from model import connect_to_db, db, User, Product
from datetime import date, datetime, timedelta
from flask_sqlalchemy import SQLAlchemy


def create_user(email, password, shipping, billing):
    """Create and return a new user."""

    user = User(email=email, password=password, shipping_add=shipping, billing_add= billing)

    return user

def get_user_by_email(email):
    
    return User.query.filter(User.email == email).first()

def get_user_password(email, password):

    user = User.query.filter(User.email == email).first()   
    return user.password

def create_product(name, price, quantity):
    """Create and return a new product."""

    product = Product(product_name=name, product_price=price, product_qty = quantity)

    return product

if __name__ == '__main__':
    from server import app
    connect_to_db(app)