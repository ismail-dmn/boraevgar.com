import { permanentRedirect } from "next/navigation";

export default function DefaultLanguagePage() {
  permanentRedirect("/tr");
}
