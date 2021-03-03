from .db import db


class Notebook(db.Model):
  __tablename__ = 'notebooks'

  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String(40), nullable=False, unique=True)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  hashed_password = db.Column(db.String(255), nullable=False)

    
  @property
  def password(self):
    return self.hashed_password
