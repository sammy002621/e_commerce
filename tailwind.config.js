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
        
        
      },
      colors:{
        happy:'#DB4444',
        mama:'#363738'
      },
      backgroundImage: {
        footer_texture: "url('/public/body_image.png')",
      }
    },

  },
  plugins: [],
}
