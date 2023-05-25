import React, { useState, useEffect } from 'react'

export const ProfilEdit = () => {
  const [data, setData] = useState([])

  
  return (
    <div>
      <h2>Modifer mon profil </h2>

      <img src={data ? data.avatar : ''} alt="avatar" />

      <label>Pseudo</label>
      <input type="text" placeholder="Mot de passe actuel" />

      <label>Changer mon mot de passe</label>
      <input type="text" placeholder="Mot de passe actuel" />
      <input type="text" placeholder="Nouveau mot de passe" />
      <input type="text" placeholder="Confirmation du mot de passe" />
    </div>
  )
}
