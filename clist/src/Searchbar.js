function SearchBar(){
    return(
        <div className="App">
            <input
             type ="text"
             placeholder="Search"
             onChange={(event) => {
                 setSearchTerm(event.target.value);
             }}
             />
             {JSONDATA.map((val, Key) => {
                 if (searchTerm == ""){
                     return val;
                 } else if(val.Name.toLowerCase().includes(searchTerm.toLowerCase())) {

                 }
                }}.map((val, key) => {
                    return(
                        <div className="user" key={key}>
                            <p>{val.Name}</p>
                        </div>

                    )
                 
             ):
                    })}

            </div>


    );
}
export default SearchBar;