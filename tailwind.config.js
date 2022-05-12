module.exports = {
  content: ['index.html'],
  darkMode:'class', 
  theme: {
    container:{
      center:true,
      padding:'16px',
    
    },
    extend: {
      colors: {
         primary: '#2563eb',
         dark :'#0f172a',
         secondary:'#64748b',
      },
      screens:{
        '2xl':'1320px',
      },
      animation:{
        blob: "blob 7s infinite"
      },
      keyframes:{
        blob:{
          "0%":{
            transform:"translate(0px, 0px) scale(1)"
          },
          "33%":{
            transform:"translate(30px, -50px) scale(1.1)"
          },
          "66%":{
            transform:"translate(-20px, 20px) scale(0.9)"
          },
          "100%":{
            transform:"translate(0px, 0px) scale(1)"
          },
        }
      }
    },
  },
  plugins: [],
}
