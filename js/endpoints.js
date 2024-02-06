const search = async (business) => {
    const url = `https://local-business-data.p.rapidapi.com/search?query=${business}&limit=10&language=en`;
      const options = {
      method: 'GET',
      headers: {
              'X-RapidAPI-Key': '843cd0b364msh8c28fccdf9e0ae3p1ef2bfjsncf8f42d07ea5',
              'X-RapidAPI-Host': 'local-business-data.p.rapidapi.com'
          }
      };
  
      try {
          const response = await fetch(url, options);
          const result = await response.json();
          return result.data
          // console.log('@@ result search => ', result);
      } catch (error) {
          console.error(error);
      }
  }