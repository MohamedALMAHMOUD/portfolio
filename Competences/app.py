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

if __name__ == '__main__':
  port = int(os.environ.get('PORT', 5000))
  app.run(host='0.0.0.0', port=port)