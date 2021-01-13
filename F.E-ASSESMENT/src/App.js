import './App.css';
import axios from 'axios';
import React,{useEffect,useState} from 'react'


const  App=()=> {
    const [profile,setprofile]=useState([])
    const [nfilter,setnfilter]=useState([])
    const [search,setSearch]=useState([])
    const [page,setpage]=useState(0)
    const [currentpage,setcurrentpage]=useState(1)
    const [filterby,setfilterby]=useState([])
    const [selectValue,setselectValue]=useState('FirstName')
    
        const fetchData=()=>{
          axios.get('https://api.enye.tech/v1/challenge/records')
          .then(({data})=>{
        let len =data.records.profiles.length
        
        let nop=len/20
        let nopa=len%20
        if(nop.toString().indexOf('.')===-1){
        
          // page=nop
          setpage(nop)
          setcurrentpage(1)
        }else{
        setpage(nop-(nopa/20)  +1)
        setcurrentpage(1)
      
      
      }
      setprofile(data.records.profiles)
      
      let first20= data.records.profiles.slice(0,20)
        setnfilter(first20)
        setfilterby(first20)
      
          })
          .catch(e=>{
          })
        }
        const prev=()=>{
          if(currentpage===1){
          }
          else{
            let position =(currentpage-2)*20
            let Slice = profile.slice(position,(currentpage-1)*20)
      
        setcurrentpage(currentpage-1)
        setnfilter(Slice)
        setfilterby(Slice)
      
          }
        }
        const next=()=>{
      if(currentpage===page){
          }else{
            let position =(currentpage)*20
      let Slice = profile.slice(position,position+20)
        setnfilter(Slice)
        setfilterby(Slice)
        setcurrentpage(currentpage+1)
          }
        }
        const Search=(e)=>{
      let val =e.target.value.replace(/\s+/g, '').trim()
      setSearch(val)
      if(val===''){
        setnfilter(filterby)
      }else{
          let filta;

        if(!isNaN(selectValue)
             ){

           filta = filterby.filter((each)=>(
            
            each[selectValue].startsWith(val)
         ))
        }
        
        else{

           filta = filterby.filter((each)=>(
            
            each[selectValue].toUpperCase().startsWith(val.toUpperCase())
         ))
        }

         
         setnfilter(filta)}
        }
        useEffect(() => {
          console.log(isNaN('745-101-8632'))

          fetchData()
          return () => {
            console.log(isNaN('745-101-8632'))
            // cleanup
          }
        }, [])
      


        const onSortChanged=(e)=>{
            setselectValue(e.target.value)
          }


    return (
        <div className='main__body'>

            <div className='user__data'>
                <header className='user__manager'>User Manager</header>
                <p className='user__info'>User info</p>
                </div>
                    <div className='second__section'>
                <div className='search__sort1'>
                    <input type='search'
                     className='search' 
                    onChange={Search}
                    value={search}
                     type="search"
                      name="Search"
                    placeholder='search for a user'/>
                        <p className="sort__by">Filter by:</p>
                    <div className='sort__user__with'>
                        <div className='select'>
                            <input value='FirstName' checked={false}
                            onChange={onSortChanged}
                           
                            checked={selectValue==='FirstName'}
                            className='radio'  type='radio'/> 
                            <label>FirstName</label> 
                            <br/></div>

                            <div className='select'>
                            <input value='LastName'
                              onChange={onSortChanged}
                              checked={selectValue==='LastName'}
                            className='radio' clicked type='radio'/> 
                            <label>LastName</label> 
                            <br/></div>


                            <div className='select'>
                            <input value='Gender' 
                            onChange={onSortChanged}
                            checked={selectValue==='Gender'}
                            className='radio' clicked type='radio'/> 
                            <label>Gender</label> 
                            <br/></div>
                          
                            
                            <div className='select'>
                            <input value='CreditCardNumber' 
                            onChange={onSortChanged}
                            checked={selectValue==='CreditCardNumber'}
                            className='radio' clicked type='radio'/> 
                            <label>CreditCardNumber</label> 
                            <br/></div>
                            <div className='select'>
                            <input value='CreditCardType' 
                            onChange={onSortChanged}
                            checked={selectValue==='CreditCardType'}
                            className='radio' clicked type='radio'/> 
                            <label>CreditCardType</label> 
                            <br/></div>
                            <div className='select'>
                            <input value='Email' 
                            onChange={onSortChanged}
                            checked={selectValue==='Email'}
                            className='radio' clicked type='radio'/> 
                            <label>Email</label> 
                            <br/></div>
                            <div className='select'>
                            <input value='DomainName'
                            onChange={onSortChanged}
                            checked={selectValue==='DomainName'}
                            className='radio' clicked type='radio'/> 
                            <label>DomainName</label> 
                            <br/></div>
                            <div className='select'>
                            <input value='PhoneNumber'
                            onChange={onSortChanged}
                            checked={selectValue==='PhoneNumber'}
                            className='radio' clicked type='radio'/> 
                            <label>PhoneNumber</label> 
                            <br/></div>
                            <div className='select'>
                            <input value='MacAddress' 
                            onChange={onSortChanged}
                            checked={selectValue==='MacAddress'}
                            className='radio' clicked type='radio'/> 
                            <label>MacAddress</label> 
                            <br/></div>
                            <div className='select'>
                            <input value='UserName' 
                            onChange={onSortChanged}
                            checked={selectValue==='UserName'}
                            className='radio' clicked type='radio'/> 
                            <label>UserName</label> 
                            <br/></div>
                            <div className='select'>
                            <input value='LastLogin' 
                            onChange={onSortChanged}
                            checked={selectValue==='LastLogin'}
                            className='radio' clicked type='radio'/> 
                            <label>LastLogin</label> 
                            <br/></div>
                            <div className='select'>
                            <input value='PaymentMethod' 
                            onChange={onSortChanged}
                            checked={selectValue==='PaymentMethod'}
                            className='radio' clicked type='radio'/> 
                            <label>PaymentMethod</label> 
                            <br/></div>

                    </div>
                </div>
                <div className='search__sort2'>


                    
<div className="table-responsive">
<table class="table">
  <thead>
    <tr>
      <th scope="col">S/N</th>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">Gender</th>
      <th scope="col">Latitude</th>
      <th scope="col">Longitude</th>
      <th scope="col">CreditCardNumber</th>
      <th scope="col">CreditCardType</th>
      <th scope="col">Email</th>
      <th scope="col">DomainName</th>
      <th scope="col">PhoneNumber</th>
      <th scope="col">MacAddress</th>
      <th scope="col">UserName</th>
      <th scope="col">LastLogin</th>
      <th scope="col">PaymentMethod</th>
     
    </tr>
    
  </thead>
  {nfilter.map((each,index)=>(
  //  <li key={index}>{each.FirstName}</li>
   <tbody>
    <tr>
      <th scope="row">{index+1}</th>
      <td>{each.FirstName}</td>
      <td>{each.LastName}</td>
      <td>{each.Gender}</td>
      <td>{each.Latitude}</td>
      <td>{each.Longitude}</td>
      <td>{each.CreditCardNumber}</td>
      <td>{each.CreditCardType}</td>
      <td>{each.Email}</td>
      <td>{each.DomainName}</td>
      <td>{each.PhoneNumber}</td>
      <td>{each.MacAddress}</td>
      <td>{each.UserName}</td>
      <td>{each.LastLogin}</td>
      <td>{each.PaymentMethod}</td>
    </tr>
   
  </tbody>

))}
  
</table>
</div>
                </div>
                </div>




                <div className='paginationcon'>

<button onClick={prev}  className="prev" tabindex="-1">Previous</button>
<button className="next disabled" onClick={next}>Next</button>
</div>
        </div>
    )
}
export default App