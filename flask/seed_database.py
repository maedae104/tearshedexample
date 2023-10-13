"""Script to seed database."""

from itertools import product
import os
import json
from random import choice, randint
from datetime import datetime
import flask.crud as crud
import flask.model as model
import flask.server as server

os.system("dropdb orders")
os.system('createdb orders')

model.connect_to_db(server.app)
model.db.create_all()


for n in range(10):
    email = f"user{n}@test.com"
    password = 'test'
    shipping = '555 ABC rd'
    billing = '555 ABC rd'

    user = crud.create_user(email, password, shipping, billing)
    model.db.session.add(user)


item = crud.create_product("blockprint1", 25, 5)
model.db.session.add(item)

model.db.session.commit()