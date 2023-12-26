function Pet(props) {
  return (
    <div>
      <h1 class="text-red-600">{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
    </div>
  );
}

export default Pet;
