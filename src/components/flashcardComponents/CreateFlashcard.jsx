import React, { useEffect, useState } from 'react';
import CreateForm from './CreateForm';
import './Create.css';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function CreateFlashcard() {
    const user = UserAuth();
    const navigate = useNavigate()
    const [createFlash, setCreateFlash] = useState(false);

    const toggleCreateForm = () => {
        setCreateFlash(createFlash ? false : true);
    }

    useEffect(() => {
      if (localStorage.getItem('redirect') === 'true'){
        window.location.reload();
        localStorage.removeItem('redirect');
      }
    }, [])

    return (
      <section id="create-flashcard">
        <div className="information">
          <div className="intro">
            <h1>Create Your Own Flash Cards Free!</h1>
         
          </div>
          <div className="start-now">
            <div className="cta">
              
                {user ? 
                <button
                  onClick={() => {
                    toggleCreateForm();
                    setTimeout(() => {
                      window.scrollTo(0, document.body.scrollHeight);
                    }, 200);
                  }}
                >
                  CREATE DECK
                </button>
                :
                <button
                onClick={() => {
                  navigate('/sign-up')
                }}
              >
                CREATE DECK
              </button>
                }
            </div>
          </div>
        </div>
        {createFlash && <CreateForm toggleForm={toggleCreateForm} />}
      </section>
    );
}

export default CreateFlashcard