def passeword(text):
  flag=0;
  if len(text)<=15:
    flag = 1
  else:
    u=l=d=0
    for i in text:
      if i.isupper():
        u+=1
      if i.islower():
        l+=1
      if i.isdigit():
          d+=1
    if u < 1 or l < 1 :
      flag = 1
    if d < 5:
        flag = 1
  return flag
pyscript.write("mytext","Votre mot de passe ne respecte pas les conditions requises" if passeword(input("Enrez votre mot de passe"))==1 else "Votre mot de passe est parfait")
