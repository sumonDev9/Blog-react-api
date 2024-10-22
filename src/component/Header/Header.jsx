import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex items-center justify-between w-11/12 mx-auto border-b-2'>
            <h1 className='text-4xl font-bold'>knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;