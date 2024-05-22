export const PersonalCard = () => {
  return (
    <div className="personal-card">
      <h3>{name}</h3>
      <p>Erde</p>
      <ul>
        {films.map((film) => (
          <li>{film}</li>
        ))}
      </ul>
    </div>
  );
};
