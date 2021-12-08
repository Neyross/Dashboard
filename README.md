# B-DEV-500-LYN-5-1-dashboard-thibault.bordenave

# REDDITECH DOCUMENTATION

- - - -

## BACK :

## API :

## NAVIGATION :

Nous avons utilisé **react-router**
```js
<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<HomePage />} />
      <Route path="*" element={<BadURL/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
```

Nous avons utilisé **navigate** pour naviguer de page en page : 
```js
<Button className="changecolor" style={{marginRight: 20}} variant="outlined" color="inherit" onClick={ () => navigate("/register")}>S'inscrire</Button>
```

- - - -

## FRONT

Au regard de notre votre nous pouvons observer 4 couleurs :
> Orange: #ff7f50
> Beige: #fdd5b1
> Noir:  #000000
> Blanc:  #ffffff

Et notre logo

<img width="150" alt="menu" src="https://i.pinimg.com/236x/c4/e0/4e/c4e04e3e98a376661c7d2e978b2902b9.jpg">


## TECHNOLOGIES

Nous avons utilisé différente technologie:
- **Front**
    - React Js / MUI / React Router
- **Back**
    - Express JS
    
- **Docker**
- **Docker-compose**
