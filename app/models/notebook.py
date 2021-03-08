from .db import db


class Notebook(db.Model):
  __tablename__ = 'notebooks'

  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String(40), nullable=False)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

  # Associations
  _affirmations = db.relationship(
      "Self_Affirmation", backref="notebooks", cascade="all, delete-orphan")
  # Association properties

  @property
  def affirmations(self):
      return [x.to_dict() for x in self._affirmations]

  # Scope
  def to_dict(self):
    return {
        "id": self.id,
        "title": self.title,
        "user_id":self.user_id,
        "affirmations": self.affirmations
    }
 
 
