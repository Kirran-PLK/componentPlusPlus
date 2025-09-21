import SingleLineBanner from "./SingleLineBanner";

export default function SingleLineBanners() {
  return (
    <>
      <h1>Single Line </h1>
      <SingleLineBanner msg="success" />
      <SingleLineBanner msg="warning" />
      <SingleLineBanner msg="error" />
      <SingleLineBanner msg="neutral" />
    </>
  );
}
