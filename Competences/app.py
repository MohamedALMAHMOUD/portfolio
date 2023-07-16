from flask import Flask, render_template, request
from passeword import passeword
from waitress import serve
from concurrent.futures import thread
app = Flask(__name__)


@app.route('/')
def index():
  return render_template('index.html')

@app.route('/', methods=['POST'])
def result():
  output = request.form.to_dict()
  mdp = output['mdp']
  resultat = passeword(mdp)
  return render_template('index.html', resultat=resultat)
  wsgi_app = app.wsgi_app
  if __name__ == '__main__':
    import os
    HOST = os.environ.get('SERVER_HOST', 'localhost')
    try:
        PORT = int(os.environ.get('SERVER_PORT', '5555'))
    except ValueError:
        PORT = 5555
    app.run(HOST, PORT)