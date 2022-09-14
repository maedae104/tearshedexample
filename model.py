from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_to_db(flask_app, db_uri="postgresql:///inventory", echo=True):
    flask_app.config["SQLALCHEMY_DATABASE_URI"] = db_uri
    flask_app.config["SQLALCHEMY_ECHO"] = echo
    flask_app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db.app = flask_app
    db.init_app(flask_app)

    print("Connected to the db!")


class User(db.Model):
    """A user."""

    __tablename__ = "users"

    user_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    email = db.Column(db.String(50), nullable=False, unique=True)
    password = db.Column(db.String(25), nullable=False)
    shipping_add = db.Column(db.String(120), nullable=False)
    billing_add = db.Column(db.String(120), nullable=False)

    


    def __repr__(self):
            return f'<User: user_id={self.user_id}, email={self.email}, shipping={self.shipping_add}>'

class Product(db.Model):

    __tablename__ = "products"

    product_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    product_name = db.Column(db.String)
    product_price = db.Column(db.Float)
    product_qty = db.Column(db.Integer)


    def __repr__(self):
            return f'<Product ID: {self.product_id}, Product name: {self.product_name}, Price: {self.product_price}, Product Quantity: {self.product_qty}>'

# class Order(db.Model):

#     __tablename__ = "orders"

#     order_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
#     order_date = db.Column(db.DateTime)
#     user_id = db.Column(db.Integer, db.ForeignKey('users.user_id'))
#     product_id = db.Column(db.Integer, db.ForeignKey('products.product_id'))
   
    # user = db.relationship("User", back_populates="orders")
    # product = db.relationship("Product", back_populates="orders")


if __name__ == "__main__":
    from server import app

    connect_to_db(app)