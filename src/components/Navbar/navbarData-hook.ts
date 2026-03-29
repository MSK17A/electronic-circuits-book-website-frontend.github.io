import { createSignal, onMount } from "solid-js";
import { apiClient } from "~/lib/api-client";
import { NavbarData, NavbarDataResponse } from "./navbar-types";

export default function useNavbarData() {
  const [navbarData, setNavbarData] = createSignal<NavbarData>();
  const [error, setError] = createSignal("");

  onMount(() => {
    fetchNavbarData();
  })


  const fetchNavbarData = async () => {
    try {
      const navBarResponse = await apiClient.get<NavbarDataResponse>("/navbar")
      setNavbarData(navBarResponse.data)
      setError("")
    } catch {
      setError("Cannot fetch /navbar")
    }
  }

  return {
    navbarData,
    fetchNavbarData,
    error
  }
}
