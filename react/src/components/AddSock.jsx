const AddSock = () => {
    return (
        <div>
            <form className="p-3">
  <div className="form-group">
    <label htmlFor="userId">User ID</label>
    <input type="text" className="form-control" id="userId" name="userId" />
  </div>
  <div className="form-group">
    <label htmlFor="size">Size</label>
    <select className="form-control" id="size" name="size">
      <option>Small</option>
      <option>Medium</option>
      <option>Large</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="color">Color</label>
    <input type="text" className="form-control" id="color" name="color" />
  </div>
  <div className="form-group">
    <label htmlFor="pattern">Pattern</label>
    <input type="text" className="form-control" id="pattern" name="pattern" />
  </div>
  <div className="form-group">
    <label htmlFor="material">Material</label>
    <input type="text" className="form-control" id="material" name="material" />
  </div>
  <div className="form-group">
    <label htmlFor="condition">Condition</label>
    <select className="form-control" id="condition" name="condition">
      <option>Used</option>
      <option>New</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="forFoot">For Foot</label>
    <select className="form-control" id="forFoot" name="forFoot">
      <option>Left</option>
      <option>Right</option>
      <option>Both</option>
    </select>
  </div>
  <div className="row">
    <div className="form-check col">
      <input
        className="form-check-input"
        type="checkbox"
        id="waterResistant"
        name="waterResistant"
      />
      <label className="form-check-label" htmlFor="waterResistant">
        Water Resistant
      </label>
    </div>
    <div className="form-check col">
      <input
        className="form-check-input"
        type="checkbox"
        id="padded"
        name="padded"
      />
      <label className="form-check-label" htmlFor="padded">
        Padded
      </label>
    </div>
    <div className="form-check col">
      <input
        className="form-check-input"
        type="checkbox"
        id="antiBacterial"
        name="antiBacterial"
      />
      <label className="form-check-label" htmlFor="antiBacterial">
        Anti Bacterial
      </label>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>;
        </div>
    )
}

export default AddSock;