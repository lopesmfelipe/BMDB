import "../styles/star.css";

const Star = () => {
  return (
    <div className="rating">
      <input type="text" name="star" id="start1"/><label for="star1"></label>
      <input type="text" name="star" id="start2"/><label for="star2"></label>
      <input type="text" name="star" id="start3"/><label for="star3"></label>
      <input type="text" name="star" id="start4"/><label for="star4"></label>
      <input type="text" name="star" id="start5"/><label for="star5"></label>
    </div>
  );
}

export default Star;