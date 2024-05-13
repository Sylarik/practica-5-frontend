import { FunctionComponent } from "preact";
import { FilmType, Project } from "../types.ts";
import { useEffect, useState } from "preact/hooks";

type Props = {
  film: FilmType;
};

const AddFilms: FunctionComponent<Props> = ({ film }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [showCreateProjectModal, setShowCreateProjectModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedProjectID, setSelectedProjectID] = useState<string>("");
  
  const [projectDescription, setProjectDescription] = useState<string>("");

  const[modal, setModal] = useState<boolean>(false)
  const[newProject, setNewProject] = useState<boolean>(false)
  const[addToProject, setaddToProject] = useState<boolean>(false)
  const[projectName, setProjectName] = useState<string>("");
  const[creado,setCreado] = useState<boolean>(false)

    const newP = () => {
        const newProject: Project = {
            id: Date.now().toString(),
            name: projectName,
            films: [],
        };
        document.cookie = `project_${newProject.id}=${
            JSON.stringify(newProject)
        }; path=/;`;
        setCreado(true)
    }

    const closeModal = () => {
        setModal(false);
    };

    

  return (
    <>
      <button id="myBtn" onClick={() => setModal(true)}>+</button>
      
      {modal && (
        <>
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={closeModal}>&times;</span>
                    <p>Que quieres hacer</p>

                    <button onClick={() => setNewProject(true)}> nuevo proyecto</button>

                    <button onClick={() => setaddToProject(true)}> añadir a proyecto</button>

                    {newProject && 
                        <>
                            <input type="text" name="projecto" placeholder="nombre del projecto" onBlur={(e) => setProjectName(e.currentTarget.value)}></input>
                            <button id="myBtn" onClick={newP}>crear</button>
                            {creado && <p>Has creado un proyecto yayyyy :)</p>}
                        </>
                    }

                </div>

                

            </div> 

            
            
        </>
      )}

    </>
  );
};

export default AddFilms;