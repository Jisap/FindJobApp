// CheckImageURL verifica si una URL es una URL de imagen válida. 
// Esta función toma una URL como argumento y devuelve un valor booleano. 

export const checkImageURL = (uri) => {  

    if (!uri) return false  // Si la URL no está definida o es falsa la función devuelve false
    
    else {

        // Pero si si esta definida se crea una expresión regular pattern que busca la presencia de una URL
        // que comience con 'http:// o https seguida de un nombre de archivo que termine con las extensiones citadas
        const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i');  
        
        // Si la url coincide con el patron la función devuelve true -> url válida
        return pattern.test(uri);
    }
};