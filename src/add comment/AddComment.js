export default function AddComment() {
    return (
        <div>

            <div className="p-2 row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                    <label>
                        <div className="p-1">
                            <span>User Name:</span>
                        </div>

                        <div className="p-1">
                            <input type="text" name="" id="" />
                        </div>
                    </label>
                </div>

                <div className="col-xl-9 col-lg-9 col-md-9 col-12">
                    <label>
                        <div className="p-1">
                            <span>Email:</span>
                        </div>

                        <div className="p-1">
                            <input type="email" name="" id="" />
                        </div>
                    </label>
                </div>
            </div>

            <div className="p-2">
                <label className="w-100">
                    <div className="p-1">
                        <span>Add new comment:</span>
                    </div>

                    <div className="p-1">
                        <textarea name="" id="" rows="5" className="w-100"></textarea>
                    </div>
                </label>
            </div>

        </div>
    )
}