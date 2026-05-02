import Image from "next/image";

function About() {
  return (
    <div>
      <h4>this is about page</h4>
      <Image
        src="https://www.shutterstock.com/image-photo/sun-sets-behind-mountain-ranges-600nw-2479236003.jpg"
        alt="Sample Image"
        width={500}
        height={300}
      />
      <br />
      <Image
        src="/assets/images/image1.jpg"
        width={200}
        height={200}
        alt="image 1"
      />
    </div>
  );
}

export default About;
