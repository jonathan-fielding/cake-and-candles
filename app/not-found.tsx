import Link from "next/link";
import { CakeSlice } from "@/components/CakeArt";

export default function NotFound() {
  return (
    <div className="container section narrow center">
      <CakeSlice className="notfound-art" />
      <h1>Someone&apos;s eaten this page</h1>
      <p className="lead">
        There&apos;s nothing here but crumbs. Let&apos;s get you back to the cake.
      </p>
      <p>
        <Link href="/" className="button">
          Back to the home page
        </Link>
      </p>
    </div>
  );
}
