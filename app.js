const products=[{
    title:'js'
},{
    title:'Java Script'
},{
    title:'ASP.NET Core'
},{
    title:'Vue.js'
}]

const filters={
    searchItem:''
}

const filterProducts=function(products,filters){
   const filteredProducts= products.filter(function(item){
        return item.title.toLowerCase().includes(filters.toLowerCase())
    })
    document.querySelector('#products').innerHTML=''
    document.querySelector('#error').innerHTML=''
    if(filteredProducts.length<1){
        const paragraph=document.createElement('p')
        paragraph.textContent='Not Found!'
        paragraph.style.color='red'    
        document.querySelector('#error').appendChild(paragraph)
    }
    filteredProducts.forEach(function(item){
        const paragraph=document.createElement('p')
    paragraph.textContent=item.title    
    document.querySelector('#products').appendChild(paragraph)
    })
    
}
filterProducts(products,filters.searchItem)
document.querySelector('#search-products').addEventListener('input',function(e){
    filters.searchItem=e.target.value      
   filterProducts(products,filters.searchItem)
})

