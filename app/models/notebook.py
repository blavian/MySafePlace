from .db import db


class Notebook(db.Model):
  __tablename__ = 'notebooks'

  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String(40), nullable=False, unique=True)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)


def to_dict(self):
    return {
        "id": self.id,
        "title": self.title,
    }
    
 
