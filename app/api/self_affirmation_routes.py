from flask import Blueprint, request
from flask_login import login_required, current_user

from app.models import db, Notebook

from app.forms.affirmation_form import AffirmationForm

affirmation_routes = Blueprint('affirmation', __name__)


