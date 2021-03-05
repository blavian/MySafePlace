from flask_wtf import FlaskForm
from wtforms import StringField 
from wtforms.validators import DataRequired, ValidationError


from app.models import Notebook


def notebook_exists(form, field):
    title = field.data

    not_unique = Notebook.query.filter(
        Notebook.title == title
       ).first()

    if not_unique:
        raise ValidationError(
            "A notebook with the same name exists. PLease post there."  # pylint: disable=line-too-long
        )
class NotebookForm(FlaskForm):
    title = StringField('title', validators=[DataRequired(), notebook_exists])
   




