from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/mdp', methods=['POST'])
def passeword(mdp):
  mdp = request.form['mdp']
  cond = "votre mot de passe ne respecte pas les conditions requises"
  flag= cond
  if len(mdp)<=15:
    flag = "votre mot de passe respecte bien les conditions requises"
  else:
    u=l=d=0
    for i in mdp:
      if i.isupper():
        u+=1
      if i.islower():
        l+=1
      if i.isdigit():
          d+=1
    if u < 1 or l < 1 :
      flag = cond
    if d < 5:
        flag = cond
  print(flag)
  return render_template('index.html')

@app.route("/")
def index():
  return render_template('index.html')

if __name__ == "__main__":
  uvicorn.run(app, host="127.0.0.1", port=8000)