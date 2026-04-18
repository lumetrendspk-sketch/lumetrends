import { Header } from "@/components/header";
import { OpenVideos } from "@/components/open-videos";
import { Footer } from "@/components/footer";

export default function OpenVideosPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <OpenVideos />
      </div>
      <Footer />
    </main>
  );
}
