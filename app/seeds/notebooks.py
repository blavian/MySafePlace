
from app.models import db, Notebook
from flask_login import current_user

# Adds a demo user, you can add other users here if you want

def seed_notebooks():

    Notebook1 = Notebook(title=' Daily gratitude',user_id = 1)
    Notebook2 = Notebook(title='I love myself because...',
                         user_id=1)

    db.session.add(Notebook1)
    db.session.add(Notebook2)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_notebooks():
    db.session.execute('TRUNCATE notebooks RESTART IDENTITY CASCADE;')
    db.session.commit()
