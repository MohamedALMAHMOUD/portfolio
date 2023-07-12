from flask import Flask, render_template, request
from passeword import passeword

app = Flask(__name__)


@app.route('/')
def index():
  return render_template('index.html')

@app.route('/index', methods=['POST'])
def result():
    output = request.form.to_dict()
    mdp = output['mdp']
    resultat = passeword(mdp)
    return render_template('index.html', resultat=resultat)

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000)
