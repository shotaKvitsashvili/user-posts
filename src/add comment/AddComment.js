import { useState } from 'react';
import { useFormik } from 'formik';
import './styles.css';


export default function AddComment() {
    const commentForm = useFormik({
        initialValues: {
            userName: '',
            email: '',
            comment: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={commentForm.handleSubmit}>
            <div className="add-comment">
                <div className="p-2 row">
                    <div className="p-2">
                        <label>
                            <div className="py-1">
                                <span>User Name:</span>
                            </div>

                            <div className="py-1 add-comment__border-input">
                                <input
                                    type="text"
                                    id="userName"
                                    name="userName"
                                    onChange={commentForm.handleChange}
                                    value={commentForm.values.userName} />
                            </div>
                        </label>
                    </div>

                    <div className="p-2">
                        <label>
                            <div className="py-1">
                                <span>Email:</span>
                            </div>

                            <div className="py-1 add-comment__border-input">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    onChange={commentForm.handleChange}
                                    value={commentForm.values.email} />
                            </div>
                        </label>
                    </div>
                </div>

                <div className="p-2">
                    <label className="w-100">
                        <div className="py-1">
                            <span>Add new comment:</span>
                        </div>

                        <div className="py-1 add-comment__border-input">
                            <textarea
                                id="comment"
                                name="comment"
                                className="w-100 add-comment__textarea"
                                onChange={commentForm.handleChange}
                                value={commentForm.values.comment}
                            ></textarea>
                        </div>
                    </label>
                </div>

                <div className="px-2">
                    <div className="p-2 add-comment__button" onClick={commentForm.handleSubmit}>
                        <div>Add Comment</div>
                    </div>
                </div>

            </div>
        </form>
    )
}