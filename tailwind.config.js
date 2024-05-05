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
        button:'#00FF66'
        
     
      },
      colors:{
        happy:'#DB4444',
        mama:'#363738',
        sammy:'#00FF66'
      },
      backgroundImage: {
        footer_texture: "url('/public/body_image.png')",
        home_texture:"url('/public/dots.svg')"
      }
    },

  },
  plugins: [],
}
