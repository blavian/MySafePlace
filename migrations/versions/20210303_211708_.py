"""empty message

Revision ID: 3f3490d0d029
Revises: 5be0a108752d
Create Date: 2021-03-03 21:17:08.896733

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3f3490d0d029'
down_revision = '5be0a108752d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('notebooks_title_key', 'notebooks', type_='unique')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_unique_constraint('notebooks_title_key', 'notebooks', ['title'])
    # ### end Alembic commands ###
