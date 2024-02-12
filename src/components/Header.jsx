import '../styles/header.scss'
export const Header = () => {
  return (
    <header>
      <div className="header">
        <div className='header--logo'>
          <div className="header--logo--img"></div>
          <p className='header-logo--text'>Only One Answer Is Correct</p>
        </div>
        <div className='header--heart'>
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5459db9f-3b26-42e8-81d8-01c3712b5d65/dfd8vmj-74d0dcc2-9363-434b-93ad-2bd49f11c733.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU0NTlkYjlmLTNiMjYtNDJlOC04MWQ4LTAxYzM3MTJiNWQ2NVwvZGZkOHZtai03NGQwZGNjMi05MzYzLTQzNGItOTNhZC0yYmQ0OWYxMWM3MzMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ExNz3uZDaHMiBieFru7pHJeC3zXsOdX6BZwofNVYrAk" alt="heart" />
        </div>
      </div>
    </header>
  );
};
