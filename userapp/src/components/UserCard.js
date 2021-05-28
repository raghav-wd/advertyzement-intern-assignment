const UserCard = ({ email, first_name, last_name, avatar }) => {
    return(
        <div className="container-card col-4 col-s-6">
            <div className="card">
                <div className='row'>
                    <div className='col-3 col-s-12'>
                        <img src={avatar} alt="Avatar" style={{width: "100%"}}/>
                    </div>
                    <div className='col-9 col-s-12'>
                        <div className="container">
                            <span><b>{first_name+' '+last_name}</b></span>
                            <p className='email'>{email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard;