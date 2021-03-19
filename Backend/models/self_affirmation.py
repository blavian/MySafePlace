from .db import db


class Self_Affirmation(db.Model):
  __tablename__ = 'self_affirmations'

  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String(40), nullable=False)
  description = db.Column(db.String(255),nullable=False)
  notebook_id = db.Column(db.Integer, db.ForeignKey('notebooks.id'), nullable=False)
  date = db.Column(db.Date)

  # Scope
  def to_dict(self):
    return {
        "id": self.id,
        "title": self.title,
        "description": self.description,
        "notebook_id": self.notebook_id,
        "date": self.date
    }



