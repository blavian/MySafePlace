from .db import db


class Self_Affirmation(db.Model):
  __tablename__ = 'self_affirmations'

  id = db.Column(db.Integer, primary_key=True)
  description = db.Column(db.String(255),nullable=False)
  notebook_id = db.Column(db.Integer, db.ForeignKey('notebooks.id'), nullable=False)

  # Scope
  def to_dict(self):
    return {
        "id": self.id,
        "description": self.description,
        "notebook_id": self.notebook_id,
    }



