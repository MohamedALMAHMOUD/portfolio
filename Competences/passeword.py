def passeword(mdp):
  cond = "votre mot de passe ne respecte pas les conditions requises"
  flag= "votre mot de passe respecte bien les conditions requises"
  if len(mdp)<=15:
    flag = cond
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
  return flag
