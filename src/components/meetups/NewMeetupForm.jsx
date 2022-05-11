import { useRef } from 'react'

import React from 'react'

function NewMeetupForm(props) {
    const titleRef = useRef()
    const imgRef = useRef()
    const descriptionRef = useRef()

    function submitHundler(event){
        event.preventDefault()

        const title = titleRef.current.value
        const img = imgRef.current.value
        const descr = descriptionRef.current.value

        const meetUp = {
            title: title,
            image: img,
            description: descr
        }

        props.addMeetup(meetUp)
    }

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-9 col-md-6'>
                    <form action="" onSubmit={submitHundler}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" name="title" required id="title" ref={titleRef}/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Image Url</label>
                            <input type="text" className="form-control" name='image' required id="image" ref={imgRef}/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea id="description" className="form-control" required name='description' ref={descriptionRef}></textarea>
                        </div>

                        <div className="text-center mt-5">
                            <button className="btn btn-success" type='submit' required rows="3">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewMeetupForm
