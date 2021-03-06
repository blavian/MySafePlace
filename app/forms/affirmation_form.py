from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError


from app.models import Self_Affirmation


def affirmation_exists(form, field):
    description = field.data

    not_unique = Self_Affirmation.query.filter(
        Self_Affirmation.description == description
    ).first()

    if not_unique:
        raise ValidationError(
            "I am sorry,but you already have an affirmation with the same title."  # pylint: disable=line-too-long
        )


class AffirmationForm(FlaskForm):
    description = StringField('description', validators=[DataRequired()])
   


