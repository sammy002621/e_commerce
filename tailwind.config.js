/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
      'montserrat': ['Montserrat'],
      'lato': ['Lato'],
      'garamond': ['Garamond'],
      'roboto': ['Roboto', 'sans'],
      'poppins':['Poppins', 'sans-serif']
       
      },
      backgroundColor:{
        sammy:'#DB4444',
        happy:'#F5F5F5',
        mama:'#363738',
        hover:'#E07575',
        button:'#00FF66',
        sidebar:'#F1F2F7',
        burger:'#FFE6CC',
        button2:'#DDE4F0',
        hygiene:'#6463D6',
        packaging:'#2FBFDE',
        food_taste:'#F99C30'
        
        
        
     
      },
      colors:{
        happy:'#DB4444',
        mama:'#363738',
        sammy:'#00FF66',
        button:'#00FF66',
        dashboard:'#1F384C',
        button_color:'#5A6ACF'
        
      },
      backgroundImage: {
        footer_texture: "url('/public/body_image.png')",
        home_texture:"url('/public/dots.svg')"
      }
    },

  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [
    require('daisyui'),
  ],
}
