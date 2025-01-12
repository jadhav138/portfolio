import { Github, Linkedin, FileText } from 'lucide-react'

export default function Home() {
  return (
    
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">Kashappa Omkar Jadhav</h1>
      <p className="text-xl mb-8">Cloud Engineer | DevOps Enthusiast</p>
      <div className="flex space-x-6 mb-8">
        <a href="https://github.com/jadhav138" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
          <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/kashappa-omkar-jadhav-a42311248/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
          <Linkedin size={24} />
        </a>
        <a href="https://medium.com/@kojadhav138" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
          <FileText size={24} />
        </a>
      </div>
      <p className="max-w-2xl text-center text-gray-300">
        I am a passionate Cloud Engineer with expertise in AWS architecture, Infrastructure as Code, and DevOps practices. 
        I specialize in designing scalable and secure cloud solutions, implementing CI/CD pipelines, and optimizing cloud infrastructure for performance and cost-efficiency.
      </p>
    </div>
  )
}
